class Comment < ActiveRecord::Base

belongs_to :matter

#validations
validates :email, :format => { :with => /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)\@((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/}
validates :name, :length => {:minimum => 2, :maximum => 30 }
validates :content, :presence => true

end
