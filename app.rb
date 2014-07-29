class SmartBikesLanding < Sinatra::Base
  set :root, File.dirname(__FILE__)
  
  register Sinatra::AssetPack
  assets {
    serve '/js',     from: 'assets/javascripts'
    serve '/css',    from: 'assets/stylesheets'
    serve '/images', from: 'assets/images'

    # The second parameter defines where the compressed version will be served.
    # (Note: that parameter is optional, AssetPack will figure it out.)
    # The final parameter is an array of glob patterns defining the contents
    # of the package (as matched on the public URIs, not the filesystem)
    js :app, ['/js/*.js']

    css :application, ['/css/*.css']

    js_compression  :uglify
    css_compression :sass
  }

  configure do
    DB = Sequel.connect(ENV['DATABASE_URL'] || 'sqlite:/')
    unless DB.table_exists? (:subscriptions)
      DB.create_table :subscriptions do
        primary_key :id
        String :email
        DateTime :createdAt        
        String :ip
      end
    end
  end

  class Subscriptions < Sequel::Model(:subscriptions)
    plugin :validation_helpers

    def validate
      super
      validates_presence [:email]
      validates_max_length 255, :email
    end
  end

  get '/' do
    slim :index
  end

  post '/subscriptions' do
    puts "SUBSCRIPTIONS: #{params}"

    begin
      sub = Subscriptions.create(email: params[:email], createdAt: DateTime.now, ip: request.ip)
    rescue Sequel::ValidationFailed => e
      return json error: e.message
    rescue Exception => e
      return json error: 'Server error'
    end    

    json subscriptions: {id: sub.id, email: sub.email}
  end

  not_found do
    redirect '/'
  end
end