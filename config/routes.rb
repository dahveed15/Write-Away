Rails.application.routes.draw do
  namespace :api do
    get 'twilio/sms'
  end

  get 'static_pages/root'

  root to: 'static_pages#root'


  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :journals, only: [:create, :index, :show, :update, :destroy]
    resources :entries, only: [:create, :index, :update, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
