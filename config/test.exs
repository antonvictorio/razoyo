import Config

# Configure your database
#
# The MIX_TEST_PARTITION environment variable can be used
# to provide built-in test partitioning in CI environment.
# Run `mix help test` for more information.
config :razoyo, Razoyo.Repo,
  username: "postgres",
  password: "postgres",
  hostname: "localhost",
  database: "razoyo_test#{System.get_env("MIX_TEST_PARTITION")}",
  pool: Ecto.Adapters.SQL.Sandbox,
  pool_size: 10

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :razoyo, RazoyoWeb.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  secret_key_base: "CIb1dzq8/4aVPsB9kJ0TpDsG712IuqAB5H+nn5W3UTKDCRx/PZn2NAZGTMNMxD5w",
  server: false

# In test we don't send emails.
config :razoyo, Razoyo.Mailer, adapter: Swoosh.Adapters.Test

# Print only warnings and errors during test
config :logger, level: :warn

# Initialize plugs at runtime for faster test compilation
config :phoenix, :plug_init_mode, :runtime
