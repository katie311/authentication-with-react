User.create(email: "test@test.com", password: "password", password_confirmation: "password")

100.times do 
  name = Faker::Creature::Cat.name
  email = Faker::Internet.email
  avatar = Faker::Avatar.image(slug: name, size: "100x400", format: "png", set: "set4")
  Friend.create(name: name, email: email, avatar: avatar)
end

puts "100 Friends Seeded"