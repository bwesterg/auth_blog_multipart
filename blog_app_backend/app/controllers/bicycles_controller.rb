class BicyclesController < ApplicationController

    def index
        @bicycles = Bicycle.all 
        render json: @bicycles
    end

end
