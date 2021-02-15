Rails.application.routes.draw do
  root to: 'nutritions#index'
  resources :nutritions, only: [:index, :new]
  get 'nutritions/index2', to: 'nutritions#index2'
  get 'nutritions/new2', to: 'nutritions#new2'
end
