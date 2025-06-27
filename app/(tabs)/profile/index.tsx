import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { LogOut, Settings, FileText, Bell, Shield } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import { Card } from '@/components/ui/Card';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.profileHeader}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImagePlaceholder}>
              <Text style={styles.profileInitials}>JD</Text>
            </View>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileEmail}>john.doe@example.com</Text>
            <TouchableOpacity style={styles.editProfileButton}>
              <Text style={styles.editProfileButtonText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <Card style={styles.menuCard}>
          <TouchableOpacity style={styles.menuItem}>
            <FileText size={20} color={Colors.gray[700]} />
            <Text style={styles.menuItemText}>My Resumes</Text>
          </TouchableOpacity>
          
          <View style={styles.divider} />
          
          <TouchableOpacity style={styles.menuItem}>
            <Bell size={20} color={Colors.gray[700]} />
            <Text style={styles.menuItemText}>Notifications</Text>
          </TouchableOpacity>
          
          <View style={styles.divider} />
          
          <TouchableOpacity style={styles.menuItem}>
            <Shield size={20} color={Colors.gray[700]} />
            <Text style={styles.menuItemText}>Privacy & Security</Text>
          </TouchableOpacity>
          
          <View style={styles.divider} />
          
          <TouchableOpacity style={styles.menuItem}>
            <Settings size={20} color={Colors.gray[700]} />
            <Text style={styles.menuItemText}>Settings</Text>
          </TouchableOpacity>
        </Card>
        
        <Card style={styles.subscriptionCard}>
          <View style={styles.subscriptionHeader}>
            <Text style={styles.subscriptionTitle}>Free Plan</Text>
            <View style={styles.subscriptionBadge}>
              <Text style={styles.subscriptionBadgeText}>Active</Text>
            </View>
          </View>
          
          <Text style={styles.subscriptionDescription}>
            You're currently on the Free plan with limited features.
            Upgrade to Pro for unlimited resume checks and advanced AI features.
          </Text>
          
          <TouchableOpacity style={styles.upgradeButton}>
            <Text style={styles.upgradeButtonText}>Upgrade to Pro</Text>
          </TouchableOpacity>
        </Card>
        
        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color={Colors.error} />
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
        
        <Text style={styles.versionText}>Version 1.0.0</Text>
        <Text style={styles.authorText}>Created by Boggula Sai Charan</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    padding: 24,
    maxWidth: 800,
    width: '100%',
    alignSelf: 'center',
  },
  profileHeader: {
    flexDirection: 'row',
    marginBottom: 24,
    alignItems: 'center',
  },
  profileImageContainer: {
    marginRight: 16,
  },
  profileImagePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primary_light,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitials: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    color: Colors.primary,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: Colors.gray[900],
    marginBottom: 4,
  },
  profileEmail: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Colors.gray[600],
    marginBottom: 12,
  },
  editProfileButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: Colors.gray[200],
    alignSelf: 'flex-start',
  },
  editProfileButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.gray[700],
  },
  menuCard: {
    marginBottom: 24,
    padding: 0,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  menuItemText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.gray[800],
    marginLeft: 12,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.gray[200],
  },
  subscriptionCard: {
    marginBottom: 24,
    padding: 24,
    backgroundColor: Colors.gray[50],
  },
  subscriptionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  subscriptionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: Colors.gray[900],
    marginRight: 12,
  },
  subscriptionBadge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: Colors.success_light,
    borderRadius: 4,
  },
  subscriptionBadgeText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: Colors.success,
  },
  subscriptionDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[600],
    marginBottom: 16,
    lineHeight: 22,
  },
  upgradeButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  upgradeButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    padding: 12,
  },
  logoutButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.error,
    marginLeft: 8,
  },
  versionText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[500],
    textAlign: 'center',
    marginBottom: 8,
  },
  authorText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[600],
    textAlign: 'center',
  },
});