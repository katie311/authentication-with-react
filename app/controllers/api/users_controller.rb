class Api::UsersController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: User.random_user(current_user.liked_users)
  end

  def update
    current_user.liked_users << params[:id].to_i
    current_user.save
  end
end
