class StaticPagesController < ApplicationController

 @latest_matters = Matter.all(order: 'created_at DESC', limit: 3)


  def home
  end

  def help
  end

  def about
  end

  def anonymity
  end

  def tracking
  end

  def methods
  end

  def problems
  end

  def statistics
  end

end
