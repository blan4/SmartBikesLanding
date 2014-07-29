require 'rubygems'
require 'bundler'

Bundler.require

use Rack::Parser, :content_types => {
  'application/json'  => Proc.new { |body| ::MultiJson.decode body }
}

require File.expand_path '../app.rb', __FILE__
run SmartBikesLanding