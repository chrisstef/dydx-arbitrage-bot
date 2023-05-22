from dydx3.constants import API_HOST_GOERLI, API_HOST_MAINNET
from decouple import config

# Select mode
MODE = "DEVELOPMENT"

# Close all open positions and orders
ABORT_ALL_POSITIONS = False

# Find Cointegrated Pairs
FIND_COINTEGRATED = True

# Place Trades
PLACE_TRADES = True

# Resolution
RESOLUTION = "1HOUR"

# Stats Window
WINDOW = 21