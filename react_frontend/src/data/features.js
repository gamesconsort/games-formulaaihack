data = [
  ("header", PacketHeader),  // Header
  ("weather", ctypes.c_uint8),
  ("timestamp", unix_timestamp), // timestamp for when the packet was received
  ("gamehost", gamehost_name), // unique identifier for the host that captured the data (not relevant) 
  // Weather - 0 = clear, 1 = light cloud, 2 = overcast
  // 3 = light rain, 4 = heavy rain, 5 = storm
  ("track_temperature", ctypes.c_int8),  // Track temp. in degrees celsius
  ("air_temperature", ctypes.c_int8),  // Air temp. in degrees celsius
  ("total_laps", ctypes.c_uint8),  // Total number of laps in this race
  ("track_length", ctypes.c_uint16),  // Track length in metres
  ("session_type", ctypes.c_uint8),
  // 0 = unknown, 1 = P1, 2 = P2, 3 = P3, 4 = Short P
  // 5 = Q1, 6 = Q2, 7 = Q3, 8 = Short Q, 9 = OSQ
  // 10 = R, 11 = R2, 12 = R3, 13 = Time Trial
  ("track_id", ctypes.c_int8),  // -1 for unknown, 0-21 for tracks, see appendix
  ("formula", ctypes.c_uint8),
  // Formula, 0 = F1 Modern, 1 = F1 Classic, 2 = F2,
  // 3 = F1 Generic
  ("session_time_left", ctypes.c_uint16),  // Time left in session in seconds
  ("session_duration", ctypes.c_uint16),  // Session duration in seconds
  ("pit_speed_limit", ctypes.c_uint8),  // Pit speed limit in kilometres per hour
  ("game_paused", ctypes.c_uint8),  // Whether the game is paused
  ("is_spectating", ctypes.c_uint8),  // Whether the player is spectating
  ("spectator_car_index", ctypes.c_uint8),  // Index of the car being spectated
  ("sli_pro_native_support", ctypes.c_uint8),
  // SLI Pro support, 0 = inactive, 1 = active
  ("num_marshal_zones", ctypes.c_uint8),  // Number of marshal zones to follow
  ("marshal_zones", MarshalZone * 21),  // List of marshal zones – max 21
  ("safety_car_status", ctypes.c_uint8),  // 0 = no safety car, 1 = full
  // 2 = virtual, 3 = formation lap
  ("network_game", ctypes.c_uint8),  // 0 = offline, 1 = online
  ("num_weather_forecast_samples", ctypes.c_uint8),
  // Number of weather samples to follow
  ("weather_forecast_samples", WeatherForecastSample * 56),
  // Array of weather forecast samples
  ("forecast_accuracy", ctypes.c_uint8),  // 0 = Perfect, 1 = Approximate.
  // The accuracy is a configurable in-game setting. We're providing data for both cases, although more for the 'perfect' mode.
  ("ai_difficulty", ctypes.c_uint8),  // AI Difficulty rating – 0-110
  ("season_link_identifier", ctypes.c_uint32),
  // Identifier for season - persists across saves
  ("weekend_link_identifier", ctypes.c_uint32),
  // Identifier for weekend - persists across saves
  ("session_link_identifier", ctypes.c_uint32),
  // Identifier for session - persists across saves
  ("pit_stop_window_ideal_lap", ctypes.c_uint8),
  // Ideal lap to pit on for current strategy (player)
  ("pit_stop_window_latest_lap", ctypes.c_uint8),
  // Latest lap to pit on for current strategy (player)
  ("pit_stop_rejoin_position", ctypes.c_uint8),
  // Predicted position to rejoin at (player)
  ("steering_assist", ctypes.c_uint8),  // 0 = off, 1 = on
  ("braking_assist", ctypes.c_uint8),  // 0 = off, 1 = low, 2 = medium, 3 = high
  ("gearbox_assist", ctypes.c_uint8),
  // 1 = manual, 2 = manual & suggested gear, 3 = auto
  ("pit_assist", ctypes.c_uint8),  // 0 = off, 1 = on
  ("pit_release_assist", ctypes.c_uint8),  // 0 = off, 1 = on
  ("ersassist", ctypes.c_uint8),  // 0 = off, 1 = on
  ("drsassist", ctypes.c_uint8),  // 0 = off, 1 = on
  ("dynamic_racing_line", ctypes.c_uint8),
  // 0 = off, 1 = corners only, 2 = full
  ("dynamic_racing_line_type", ctypes.c_uint8),  // 0 = 2D, 1 = 3D
]