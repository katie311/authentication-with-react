class PostsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    render json: current_user.posts
  end

  def create
    post = current_user.posts.new(post_params)
    if post.save
      render json: post
    else
      render json: {}
    end
  end

  private
    def post_params
      params.require(:post).permit(:body)
    end
end
