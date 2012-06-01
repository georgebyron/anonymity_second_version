class ApplicationController < ActionController::Base
  protect_from_forgery

	load_and_authorize_resource

	def current_ability
  @current_ability ||= Ability.new(current_admin)
end

	rescue_from CanCan::AccessDenied do |exception|
    redirect_to root_url, :alert => exception.message
  end

end
