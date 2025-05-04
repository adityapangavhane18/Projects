import streamlit as st
import pandas as pd
import numpy as np

# Drilldown operation
def drilldown(traffic_data, weather_data, accident_history):
    # Clean column names for all DataFrames
    traffic_data.columns = [col.strip().lower() for col in traffic_data.columns]
    accident_history.columns = [col.strip().lower() for col in accident_history.columns]
    weather_data.columns = [col.strip().lower() for col in weather_data.columns]

    # Check if 'location' exists in both DataFrames
    if 'location' not in traffic_data.columns or 'location' not in accident_history.columns:
        st.error("Column 'location' is missing from one of the datasets.")
        st.write("Traffic Data Columns:", traffic_data.columns.tolist())
        st.write("Accident History Columns:", accident_history.columns.tolist())
        return

    if 'city' not in traffic_data.columns:
        st.error("Column 'city' is missing in traffic_data, required for drilldown.")
        st.write("Traffic Data Columns:", traffic_data.columns.tolist())
        return

    # Merge the data
    merged_data = pd.merge(traffic_data, accident_history, on='location', how='inner')

    # Group by 'city' for drilldown
    city_details = merged_data.groupby(['city']).agg(
        traffic_volume=('traffic volume', 'sum'),
        accident_count=('accident count', 'sum')
    ).reset_index()

    # Display the results
    st.dataframe(city_details[['city', 'traffic_volume', 'accident_count']])
