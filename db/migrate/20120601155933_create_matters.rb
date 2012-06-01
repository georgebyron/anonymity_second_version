class CreateMatters < ActiveRecord::Migration
  def change
    create_table :matters do |t|
      t.string :title
      t.text :description
      t.integer :article_id
      t.string :name

      t.timestamps
    end
  end
end
