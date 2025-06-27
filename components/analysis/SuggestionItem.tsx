import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CircleAlert as AlertCircle, TriangleAlert as AlertTriangle, CircleCheck as CheckCircle, Info } from 'lucide-react-native';
import Colors from '@/constants/Colors';

type SuggestionType = 'error' | 'warning' | 'success' | 'info';

interface SuggestionItemProps {
  type: SuggestionType;
  title: string;
  description: string;
}

export default function SuggestionItem({ 
  type, 
  title, 
  description 
}: SuggestionItemProps) {
  const getIcon = () => {
    switch (type) {
      case 'error':
        return <AlertCircle size={20} color={Colors.error} />;
      case 'warning':
        return <AlertTriangle size={20} color={Colors.warning} />;
      case 'success':
        return <CheckCircle size={20} color={Colors.success} />;
      case 'info':
        return <Info size={20} color={Colors.primary} />;
      default:
        return <Info size={20} color={Colors.primary} />;
    }
  };
  
  const getStyles = () => {
    switch (type) {
      case 'error':
        return {
          container: styles.errorContainer,
          border: styles.errorBorder,
        };
      case 'warning':
        return {
          container: styles.warningContainer,
          border: styles.warningBorder,
        };
      case 'success':
        return {
          container: styles.successContainer,
          border: styles.successBorder,
        };
      case 'info':
        return {
          container: styles.infoContainer,
          border: styles.infoBorder,
        };
      default:
        return {
          container: styles.infoContainer,
          border: styles.infoBorder,
        };
    }
  };
  
  const typeStyles = getStyles();
  
  return (
    <View style={[styles.container, typeStyles.container]}>
      <View style={[styles.borderLeft, typeStyles.border]} />
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          {getIcon()}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  borderLeft: {
    width: 4,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
  },
  iconContainer: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    marginBottom: 4,
    color: Colors.gray[900],
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[600],
    lineHeight: 20,
  },
  // Error styles
  errorContainer: {
    backgroundColor: Colors.error_light,
  },
  errorBorder: {
    backgroundColor: Colors.error,
  },
  // Warning styles
  warningContainer: {
    backgroundColor: Colors.warning_light,
  },
  warningBorder: {
    backgroundColor: Colors.warning,
  },
  // Success styles
  successContainer: {
    backgroundColor: Colors.success_light,
  },
  successBorder: {
    backgroundColor: Colors.success,
  },
  // Info styles
  infoContainer: {
    backgroundColor: Colors.primary_light,
  },
  infoBorder: {
    backgroundColor: Colors.primary,
  },
});