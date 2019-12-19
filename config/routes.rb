Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :friends, only: [:index, :update,]
    get 'my_friends', to: 'friends#my_friends'
    delete 'remove', to: 'friends#my_friends#remove/:id'
    resources :posts, only: [:index, :create, :update, :destroy ]
  end

end
