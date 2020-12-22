class NutritionsController < ApplicationController

  def index
    @nutritions = Nutrition.all
  end

  def new
    @nutritions = Nutrition.all
  end

end
