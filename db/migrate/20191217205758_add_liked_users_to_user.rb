class AddLikedUsersToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :liked_users, :text
  end
end
