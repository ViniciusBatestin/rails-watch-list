class ListsController < ApplicationController

  def index
    @lists = list.all
  end


end
