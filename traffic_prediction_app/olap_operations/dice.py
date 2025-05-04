import streamlit as st

def dice_operation(traffic_df, weather_df, accident_df):
    st.subheader("🎲 Dice Operation (Filtering on Multiple Dimensions)")

    state = st.selectbox('Select State', traffic_df['State'].unique())
    weather = st.selectbox('Select Weather', weather_df['Weather'].unique())

    diced_data = traffic_df[(traffic_df['State'] == state)] \
        .merge(weather_df[weather_df['Weather'] == weather], on='Location')
    
    st.dataframe(diced_data)
