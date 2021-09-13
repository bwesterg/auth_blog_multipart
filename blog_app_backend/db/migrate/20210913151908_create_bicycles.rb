class CreateBicycles < ActiveRecord::Migration[6.1]
  def change
    create_table :bicycles do |t|
      t.string :usage
      t.string :frame_material
      t.string :manufacturer
      t.integer :speeds

      t.timestamps
    end
  end
end
