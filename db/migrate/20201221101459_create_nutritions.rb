class CreateNutritions < ActiveRecord::Migration[6.0]
  def change
    create_table :nutritions do |t|
      t.datetime  :day,           null: false
      t.string    :calculation,   null: false
      t.timestamps
    end
  end
end
