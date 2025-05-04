import streamlit as st

def slice_operation(traffic_df, weather_df, accident_df):
    st.subheader("📄 Slice Operation (Filtering on One Dimension)")

    selected_weather = st.selectbox('Select Weather Condition', weather_df['Weather'].unique())
    sliced_data = weather_df[weather_df['Weather'] == selected_weather]
    
    st.dataframe(sliced_data)
