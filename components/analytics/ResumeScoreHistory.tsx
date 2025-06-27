import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '@/constants/Colors';

export default function ResumeScoreHistory() {
  // This would be connected to real data in a full implementation
  // For now, we'll use placeholder/static data
  
  return (
    <View style={styles.container}>
      <View style={styles.chartPlaceholder}>
        <View style={styles.chartYAxis}>
          <Text style={styles.axisLabel}>100</Text>
          <Text style={styles.axisLabel}>75</Text>
          <Text style={styles.axisLabel}>50</Text>
          <Text style={styles.axisLabel}>25</Text>
          <Text style={styles.axisLabel}>0</Text>
        </View>
        
        <View style={styles.chartContent}>
          <View style={styles.gridLines}>
            <View style={styles.gridLine} />
            <View style={styles.gridLine} />
            <View style={styles.gridLine} />
            <View style={styles.gridLine} />
            <View style={styles.gridLine} />
          </View>
          
          <View style={styles.barContainer}>
            <View style={styles.barWrapper}>
              <View style={[styles.bar, { height: '65%' }]} />
              <Text style={styles.barLabel}>Apr 10</Text>
            </View>
            
            <View style={styles.barWrapper}>
              <View style={[styles.bar, { height: '58%' }]} />
              <Text style={styles.barLabel}>Apr 15</Text>
            </View>
            
            <View style={styles.barWrapper}>
              <View style={[styles.bar, { height: '72%' }]} />
              <Text style={styles.barLabel}>Apr 22</Text>
            </View>
            
            <View style={styles.barWrapper}>
              <View style={[styles.bar, { height: '78%', backgroundColor: Colors.primary }]} />
              <Text style={styles.barLabel}>May 1</Text>
            </View>
          </View>
        </View>
      </View>
      
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: Colors.primary_light }]} />
          <Text style={styles.legendText}>Previous Versions</Text>
        </View>
        
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: Colors.primary }]} />
          <Text style={styles.legendText}>Latest Version</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  chartPlaceholder: {
    height: 240,
    flexDirection: 'row',
    marginBottom: 16,
  },
  chartYAxis: {
    width: 40,
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingRight: 8,
    paddingVertical: 8,
  },
  axisLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: Colors.gray[500],
  },
  chartContent: {
    flex: 1,
    position: 'relative',
  },
  gridLines: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  gridLine: {
    height: 1,
    backgroundColor: Colors.gray[200],
    width: '100%',
  },
  barContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  barWrapper: {
    alignItems: 'center',
    width: 40,
  },
  bar: {
    width: 24,
    backgroundColor: Colors.primary_light,
    borderRadius: 4,
    marginBottom: 8,
  },
  barLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: Colors.gray[600],
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  legendText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[700],
  },
});