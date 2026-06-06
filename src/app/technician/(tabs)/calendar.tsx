import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

export default function TechnicianCalendar() {
  const [viewMode, setViewMode] = useState<'Monthly' | 'Weekly'>('Monthly');
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 3, 1)); // April 2026
  const [selectedDay, setSelectedDay] = useState<number | null>(9);

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  // Dummy data
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayIndex = currentMonth.getDay();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f8fafc' }}>
      <View style={{ padding: 16, paddingTop: 24, gap: 20, paddingBottom: 80 }}>
        
        {/* Header */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <View style={{ gap: 4 }}>
            <Text style={{ fontSize: 10, fontWeight: '600', color: '#64748b', textTransform: 'uppercase' }}>MANAGE</Text>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#00327d' }}>Calendar</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(107, 254, 156, 0.3)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20, gap: 4 }}>
            <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: '#006d37' }} />
            <Text style={{ fontSize: 10, fontWeight: '600', color: '#00743a' }}>ONLINE</Text>
          </View>
        </View>

        {/* Toggle Monthly / Weekly */}
        <View style={{ paddingHorizontal: 40, paddingTop: 8 }}>
          <View style={{ flexDirection: 'row', backgroundColor: 'rgba(226, 226, 235, 0.4)', borderRadius: 20, padding: 4 }}>
            <TouchableOpacity onPress={() => setViewMode('Monthly')} style={{ flex: 1, backgroundColor: viewMode === 'Monthly' ? 'white' : 'transparent', paddingVertical: 8, borderRadius: 20, alignItems: 'center', shadowColor: viewMode === 'Monthly' ? '#000' : 'transparent', shadowOpacity: 0.05, shadowRadius: 2, elevation: viewMode === 'Monthly' ? 1 : 0 }}>
              <Text style={{ fontSize: 12, fontWeight: '600', color: viewMode === 'Monthly' ? '#00327d' : '#434653' }}>Monthly</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setViewMode('Weekly')} style={{ flex: 1, backgroundColor: viewMode === 'Weekly' ? 'white' : 'transparent', paddingVertical: 8, borderRadius: 20, alignItems: 'center', shadowColor: viewMode === 'Weekly' ? '#000' : 'transparent', shadowOpacity: 0.05, shadowRadius: 2, elevation: viewMode === 'Weekly' ? 1 : 0 }}>
              <Text style={{ fontSize: 12, fontWeight: '600', color: viewMode === 'Weekly' ? '#00327d' : '#434653' }}>Weekly</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Calendar Card */}
        <View style={{ backgroundColor: 'white', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: 'rgba(195, 198, 213, 0.3)', gap: 16 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#191b22' }}>{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</Text>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <TouchableOpacity onPress={prevMonth} style={{ padding: 4 }}><Text style={{ color: '#434653' }}>{'<'}</Text></TouchableOpacity>
              <TouchableOpacity onPress={nextMonth} style={{ padding: 4 }}><Text style={{ color: '#434653' }}>{'>'}</Text></TouchableOpacity>
            </View>
          </View>
          
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
            {['S','M','T','W','T','F','S'].map((day, i) => (
              <Text key={i} style={{ width: 32, textAlign: 'center', fontSize: 12, fontWeight: '600', color: '#64748b' }}>{day}</Text>
            ))}
          </View>
          
          {/* Calendar Grid */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', rowGap: 8 }}>
            {/* Previous month empty slots */}
            {[...Array(firstDayIndex)].map((_, i) => (
               <View key={`empty-${i}`} style={{ width: `${100/7}%`, height: 32, justifyContent: 'center', alignItems: 'center' }} />
            ))}
            {/* Current month days */}
            {[...Array(daysInMonth)].map((_, i) => {
               const d = i + 1;
               const isSelected = selectedDay === d;
               // Dummy logic
               const isRed = d === 14 || d === 15;
               const isBooked = [1,2,3,4,5,6,7,8,10,11,12].includes(d);
               
               let bgColor = 'transparent';
               let textColor = '#191b22';
               let borderColor = 'transparent';

               if (isSelected) {
                 bgColor = '#6bfe9c';
                 borderColor = '#00327d';
                 textColor = '#00327d';
               } else if (isRed) {
                 bgColor = '#ffdad6';
                 textColor = '#93000a';
               } else if (isBooked) {
                 bgColor = '#6bfe9c';
                 textColor = '#00743a';
               }

               return (
                 <TouchableOpacity key={`day-${d}`} onPress={() => setSelectedDay(d)} style={{ width: `${100/7}%`, height: 32, justifyContent: 'center', alignItems: 'center' }}>
                   <View style={{ width: 32, height: 32, justifyContent: 'center', alignItems: 'center', backgroundColor: bgColor, borderRadius: 16, borderWidth: isSelected ? 2 : 0, borderColor: borderColor }}>
                     <Text style={{ fontSize: 12, fontWeight: isBooked||isSelected||isRed ? '600' : '500', color: textColor }}>{d}</Text>
                   </View>
                 </TouchableOpacity>
               );
            })}
          </View>
        </View>

        {/* Selected Day Schedule */}
        {selectedDay && (
          <View style={{ gap: 12 }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#191b22' }}>Schedule for {monthNames[currentMonth.getMonth()]} {selectedDay}</Text>
            {selectedDay % 3 === 0 ? (
               <View style={{ backgroundColor: 'white', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#e2e2eb' }}>
                 <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#191b22', marginBottom: 4 }}>AC Repair - Sarah J.</Text>
                 <Text style={{ fontSize: 14, color: '#64748b', marginBottom: 8 }}>14:00 - 15:30</Text>
                 <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                   <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#F39C12' }} />
                   <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#F39C12' }}>Pending Confirmation</Text>
                 </View>
               </View>
            ) : selectedDay % 2 === 0 ? (
               <View style={{ backgroundColor: 'white', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#e2e2eb' }}>
                 <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#191b22', marginBottom: 4 }}>Washing Machine - Budi H.</Text>
                 <Text style={{ fontSize: 14, color: '#64748b', marginBottom: 8 }}>09:00 - 10:30</Text>
                 <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                   <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#006d37' }} />
                   <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#006d37' }}>Booked</Text>
                 </View>
               </View>
            ) : (
               <View style={{ padding: 16, borderRadius: 12, backgroundColor: '#f0f0f9', alignItems: 'center' }}>
                 <Text style={{ color: '#64748b' }}>No schedule for this day.</Text>
               </View>
            )}
          </View>
        )}

        {/* Legend */}
        <View style={{ flexDirection: 'row', backgroundColor: 'white', borderRadius: 12, padding: 12, borderWidth: 1, borderColor: 'rgba(195, 198, 213, 0.3)', justifyContent: 'space-between' }}>
           <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#006d37' }} />
              <Text style={{ fontSize: 10, fontWeight: '500', color: '#434653' }}>Booked</Text>
           </View>
           <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#F39C12' }} />
              <Text style={{ fontSize: 10, fontWeight: '500', color: '#434653' }}>Pending</Text>
           </View>
           <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#e2e2eb' }} />
              <Text style={{ fontSize: 10, fontWeight: '500', color: '#434653' }}>Available</Text>
           </View>
        </View>

      </View>
    </ScrollView>
  );
}
