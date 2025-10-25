import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const holidays = [
  { date: new Date(2025, 0, 1), description: "New Year's Day" },
  { date: new Date(2025, 1, 12), description: "Makha Bucha Day" },
  { date: new Date(2025, 3, 7), description: "Chakri Memorial Day" },
  { date: new Date(2025, 3, 13), description: "Songkran Festival" },
  { date: new Date(2025, 3, 14), description: "Songkran Festival" },
  { date: new Date(2025, 3, 15), description: "Songkran Festival" },
  { date: new Date(2025, 3, 16), description: "Songkran Festival" },
  { date: new Date(2025, 4, 1), description: "Labour Day" },
  { date: new Date(2025, 4, 5), description: "Coronation Day" },
  { date: new Date(2025, 4, 12), description: "Visakha Bucha Day" },
  { date: new Date(2025, 6, 28), description: "King Vajiralongkorn's Birthday" },
  { date: new Date(2025, 7, 12), description: "The Queen Mother's Birthday" },
  { date: new Date(2025, 9, 13), description: "King Bhumibol Adulyadej Memorial Day" },
  { date: new Date(2025, 9, 23), description: "King Chulalongkorn Memorial Day" },
  { date: new Date(2025, 11, 5), description: "King Bhumibol Adulyadej's Birthday" },
  { date: new Date(2025, 11, 10), description: "Constitution Day" },
  { date: new Date(2025, 11, 31), description: "New Year's Eve" },
];

const AcademicCalendar = () => {
  const [month, setMonth] = useState(new Date());

  const holidaysForMonth = holidays.filter(
    (holiday) => holiday.date.getMonth() === month.getMonth()
  );

  const holidayDates = holidays.map((holiday) => holiday.date);

  const modifiers = {
    weekend: { dayOfWeek: [0, 6] },
    holiday: holidayDates,
  };

  const modifiersStyles = {
    weekend: {
      color: 'red',
    },
    holiday: {
      textDecoration: 'underline',
      textDecorationColor: 'blue',
      textDecorationThickness: '2px',
    },
  };

  return (
    <> 
          <Navigation />
          <main className="pt-20 lg:pt-0 lg:mr-[80px]">
            <section id="calendar" className="pb-20 lg:pt-20 bg-muted/30">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
                    Academic Calendar 2025
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                    Stay on track with important dates and deadlines throughout the academic year.
                  </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
                  <Card className="p-4">
                    <Calendar
                      mode="single"
                      selected={new Date()} // Today's date
                      onMonthChange={setMonth}
                      className="rounded-md border"
                      modifiers={modifiers}
                      modifiersStyles={modifiersStyles}
                      numberOfMonths={1}
                    />
                  </Card>
                  <Card className="w-full lg:w-1/2">
                    <CardHeader>
                      <CardTitle>
                        Events for {month.toLocaleString('default', { month: 'long' })}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {holidaysForMonth.length > 0 ? (
                        <ul className="space-y-2">
                          {holidaysForMonth.map((holiday, index) => (
                            <li key={index} className="flex items-center gap-4">
                              <div className="font-bold">
                                {holiday.date.toLocaleDateString('en-US', { day: '2-digit' })}
                              </div>
                              <div>{holiday.description}</div>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>No events for this month.</p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </>  );
};

export default AcademicCalendar;
