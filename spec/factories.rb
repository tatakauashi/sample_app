FactoryGirl.define do
  factory :user do
#    name     "SAKAI Mei"
#    email    "mei@ggl.com"
    sequence(:name)  { |n| "Person #{n}" }
    sequence(:email) { |n| "person_#{n}@example.com" }
    password "foobar"
    password_confirmation "foobar"

    factory :admin do
      admin true
    end
  end
end
