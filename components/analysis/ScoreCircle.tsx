import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import Colors from '@/constants/Colors';

interface ScoreCircleProps {
  score: number;
  size?: number;
  strokeWidth?: number;
}

export default function ScoreCircle({ 
  score, 
  size = 120, 
  strokeWidth = 10 
}: ScoreCircleProps) {
  // Calculate parameters for the circle
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const fillPercentage = (score / 100) * circumference;
  
  // Determine color based on score
  let scoreColor = Colors.error;
  if (score >= 70) {
    scoreColor = Colors.success;
  } else if (score >= 50) {
    scoreColor = Colors.warning;
  }
  
  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        {/* Background Circle */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={Colors.gray[200]}
          fill="transparent"
        />
        
        {/* Foreground Circle */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={scoreColor}
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - fillPercentage}
          // Start from top (rotated -90 degrees)
          transform={`rotate(-90, ${size / 2}, ${size / 2})`}
        />
      </Svg>
      
      <View style={[styles.scoreContainer, { width: size, height: size }]}>
        <Text style={[styles.scoreText, { color: scoreColor }]}>{score}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreText: {
    fontFamily: 'Inter-Bold',
    fontSize: 36,
  },
});