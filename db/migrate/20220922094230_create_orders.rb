class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.integer :total_price, null: false, default: 0, comment:"注文数"
      t.timestamps
    end
  end
end
