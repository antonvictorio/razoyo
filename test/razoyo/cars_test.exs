defmodule Razoyo.CarsTest do
  use Razoyo.DataCase

  alias Razoyo.Cars

  describe "cars" do
    alias Razoyo.Cars.Car

    import Razoyo.CarsFixtures

    @invalid_attrs %{description: nil, make: nil}

    test "list_cars/0 returns all cars" do
      car = car_fixture()
      assert Cars.list_cars() == [car]
    end

    test "get_car!/1 returns the car with given id" do
      car = car_fixture()
      assert Cars.get_car!(car.id) == car
    end

    test "create_car/1 with valid data creates a car" do
      valid_attrs = %{description: "some description", make: "some make"}

      assert {:ok, %Car{} = car} = Cars.create_car(valid_attrs)
      assert car.description == "some description"
      assert car.make == "some make"
    end

    test "create_car/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Cars.create_car(@invalid_attrs)
    end

    test "update_car/2 with valid data updates the car" do
      car = car_fixture()
      update_attrs = %{description: "some updated description", make: "some updated make"}

      assert {:ok, %Car{} = car} = Cars.update_car(car, update_attrs)
      assert car.description == "some updated description"
      assert car.make == "some updated make"
    end

    test "update_car/2 with invalid data returns error changeset" do
      car = car_fixture()
      assert {:error, %Ecto.Changeset{}} = Cars.update_car(car, @invalid_attrs)
      assert car == Cars.get_car!(car.id)
    end

    test "delete_car/1 deletes the car" do
      car = car_fixture()
      assert {:ok, %Car{}} = Cars.delete_car(car)
      assert_raise Ecto.NoResultsError, fn -> Cars.get_car!(car.id) end
    end

    test "change_car/1 returns a car changeset" do
      car = car_fixture()
      assert %Ecto.Changeset{} = Cars.change_car(car)
    end
  end
end
