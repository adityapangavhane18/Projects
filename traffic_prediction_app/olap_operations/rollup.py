import streamlit as st

def rollup(traffic_df, weather_df, accident_df):
    st.subheader("🔼 Roll-up Operation (Lower to Higher Level Aggregation)")
    
    city_rollup = traffic_df.groupby('City').agg({'Traffic Volume': 'sum'}).reset_index()
    st.dataframe(city_rollup)
    
    state_rollup = traffic_df.groupby('State').agg({'Traffic Volume': 'sum'}).reset_index()
    st.dataframe(state_rollup)

