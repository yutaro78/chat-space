Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:edit, :update]
  resources :groups, only: [:new, :create]
  resources :groups, only: [:index, :new, :create, :edit, :update]
end
