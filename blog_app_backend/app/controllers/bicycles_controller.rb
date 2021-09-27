class BicyclesController < ApplicationController

    def index
        @bicycles = Bicycle.all 
        render json: @bicycles
    end


    def create
        @bicycle = Bicycle.create(
            usage: params[:usage],
            frame_material: params[:frame_material],
            manufacturer: params[:manufacturer],
            speeds: params[:speeds]
        )

        render json: @bicycle, status: :created
    end
end


