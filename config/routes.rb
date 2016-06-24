Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, default: {format: :json} do
    resources :benches, only: [:index, :create]
  end
end
