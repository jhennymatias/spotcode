class Category < ApplicationRecord
    has_many: album 
    validates: name, presence:true
    has_one_attached: image
end
