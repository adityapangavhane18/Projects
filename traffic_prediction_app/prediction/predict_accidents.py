import streamlit as st
import pandas as pd

def predict_accident_zones(traffic_df, weather_df, accident_df):
    st.subheader("🧠 Predict Accident Prone Zones")
    
    merged_data = pd.merge(traffic_df, accident_df, on='Location')
    merged_data = pd.merge(merged_data, weather_df, on='Location')

    # Ensure 'Severity' is numeric
    merged_data['Severity'] = pd.to_numeric(merged_data['Severity'], errors='coerce')
    merged_data.dropna(subset=['Severity'], inplace=True)

    # Simple rule-based prediction
    merged_data['Risk_Score'] = (merged_data['Traffic Volume'] * 0.4) + \
                                (merged_data['Accident Count'] * 0.5) + \
                                (merged_data['Severity'] * 0.1)

    top_risky_zones = merged_data.sort_values('Risk_Score', ascending=False).head(10)
    
    st.dataframe(top_risky_zones[['Location', 'Risk_Score']])
    st.write("These are the top 10 zones with the highest risk of accidents based on the given data.")