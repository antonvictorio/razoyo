# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Razoyo.Repo.insert!(%Razoyo.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

Razoyo.Cars.create_car(%{
  year: "2022",
  make: "Subaru",
  model: "WRX",
  img_url: "https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-photo/original/subaru-wrx-front-5ab05a29ccc3f.webp",
  price: "4,500",
  mpg: "18",
  seats: "5"
})

Razoyo.Cars.create_car(%{
  year: "2022",
  make: "Aston Martin",
  model: "DB11",
  img_url: "https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-photo/original/2018-aston-martin-db11-coupe-front-5aaa44c314b1d.webp",
  price: "10,500",
  mpg: "11",
  seats: "2"
})

Razoyo.Cars.create_car(%{
  year: "2022",
  make: "Toyota",
  model: "Rav 4",
  img_url: "https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-photo/original/2022-toyota-rav4-hev-philippines-620cce0370b1b.webp",
  price: "4,200",
  mpg: "14",
  seat: "5"
})

Razoyo.Cars.create_car(%{
  year: "2022",
  make: "Hyundai",
  model: "Ioniq",
  img_url: "https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-photo/original/hyundai-ioniq-hybrid-review-road-test-front-quarter-exterior-philippines-5e2e73acb3176.webp",
  price: "2,800",
  mpg: "24",
  seat: "5"
})

Razoyo.Cars.create_car(%{
  year: "2022",
  make: "BMW",
  model: "M3",
  img_url: "https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-photo/original/2021-bmw-318i-sport-60753f10910e5.webp",
  price: "6,500",
  mpg: "10",
  seat: "5"
})
