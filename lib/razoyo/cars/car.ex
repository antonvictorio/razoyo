defmodule Razoyo.Cars.Car do
  use Ecto.Schema
  import Ecto.Changeset

  @derive {Jason.Encoder, only: [
    :id,
    :year,
    :make,
    :model,
    :img_url,
    :price,
    :mpg,
    :seats
  ]}

  schema "cars" do
    field :year, :string
    field :make, :string
    field :model, :string
    field :img_url, :string
    field :price, :string
    field :mpg, :string
    field :seats, :string

    timestamps()
  end

  @doc false
  def changeset(car, attrs) do
    car
    |> cast(attrs, [
      :year,
      :make,
      :model,
      :img_url,
      :price,
      :mpg,
      :seats
    ])
    |> validate_required([:make])
  end
end
