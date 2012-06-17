class Matter < ActiveRecord::Base

has_many :comments

# validations
validates :name, :length => {:minimum => 2, :maximum => 30 }
validates :description, :presence => true
validates :title, :presence => true

end
