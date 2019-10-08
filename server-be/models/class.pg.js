/**
 * Table Schema: Class
 * ID               auto
 * Code             string
 * Name             string
 * StudentNumber    number
 * ClassSectionID   foreignKey
 * RoomID           foreignKey
 * Semester         string
 * Day              number(enum: Day of week)
 * StartTime        number
 * HourNumber       number
 * RequireRoom      string(enum)
 * Students         array<string> (studentCode = username)
 * Lecturer         string (LecturerCode = username)
 */