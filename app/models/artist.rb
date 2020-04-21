class Artist < ApplicationRecord
    has_many: album
    validates: name, presence:true
    validates: title, precense:true
    has_one_attached: photo
end
