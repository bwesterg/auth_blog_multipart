class BicyclesController < ApplicationController

    before_action :find_bicycle, only: [:update, :destroy]

    def index
        @bicycles = Bicycle.all 
        render json: @bicycles
    end


    def create
        @bicycle = Bicycle.create(bicycle_params)

        render json: @bicycle, status: :created
    end

    def destroy 
        # @bicycle = Bicycle.find(params[:id])
        @bicycle.destroy
        render status: :no_content
    end

    def update 
        # @bicycle = Bicycle.find(params[:id])
        @bicycle.update(bicycle_params)
        render json: @bicycle
    end


    private

    def find_bicycle
        @bicycle = Bicycle.find(params[:id])
    end

    def bicycle_params
        params.require(:bicycle).permit(:usage, :frame_material, :manufacturer, :speeds)
    end
end


