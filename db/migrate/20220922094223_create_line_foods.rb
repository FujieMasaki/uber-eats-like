class CreateLineFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :line_foods do |t|
      t.references :food, null: false, foreign_key: true, comment:"仮注文したフードのid"
      t.references :restaurant, null: false, foreign_key: true, comment:, comment:"仮注文したレストランのid"
      t.references :order, foreign_key: true, comment:"注文id"
      t.integer :count, null: false, default: 0, comment:"仮注文数"
      t.boolean :active, null: false, default: false

      t.timestamps
    end
  end
end
