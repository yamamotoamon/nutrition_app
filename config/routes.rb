Rails.application.routes.draw do
  root to: 'nutritions#index'
  resources :nutritions, only: [:index, :new]
end
