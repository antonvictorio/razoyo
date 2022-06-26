defmodule Razoyo.CarsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Razoyo.Cars` context.
  """

  @doc """
  Generate a car.
  """
  def car_fixture(attrs \\ %{}) do
    {:ok, car} =
      attrs
      |> Enum.into(%{
        description: "some description",
        make: "some make"
      })
      |> Razoyo.Cars.create_car()

    car
  end
end
