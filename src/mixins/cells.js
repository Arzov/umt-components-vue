export default {
    methods: {

        /**
         * Get local time from UTC date
         * @param {String} dateUTC Date in UTC format
         */
        getLocalFromUTC (dateUTC) {

            const currDate = new Date(Date.parse(`${dateUTC}`))

            return currDate

        },


        /**
         * Get month from date in `MM` format
         * @param {String} currDate Date to parse
         */
        getMonthMM (currDate) {

            let currentMonth = this.getLocalFromUTC(currDate).getMonth() + 1

            // left padding 0 to month less than 10

            if (currentMonth < 10) {
                currentMonth = '0' + currentMonth
            }

            return currentMonth

        },


        /**
         * Get day from date in `DD` format
         * @param {String} currDate Date to parse
         */
        getDayDD (currDate) {

            let currentDay = this.getLocalFromUTC(currDate).getDate()

            // left padding 0 to day less than 10

            if (currentDay < 10) {
                currentDay = '0' + currentDay
            }

            return currentDay

        },


        /**
         * Get hour from date in `HH` format
         * @param {String} currDate Date to parse
         */
         getHourHH (currDate) {

            let currentHour = this.getLocalFromUTC(currDate).getHours()

            // left padding 0 to day less than 10

            if (currentHour < 10) {
                currentHour = '0' + currentHour
            }

            return currentHour

        },


        /**
         * Get minuntes from date in `MM` format
         * @param {String} currDate Date to parse
         */
         getMinutesMM (currDate) {

            let currentMinutes = this.getLocalFromUTC(currDate).getMinutes()

            // left padding 0 to day less than 10

            if (currentMinutes < 10) {
                currentMinutes = '0' + currentMinutes
            }

            return currentMinutes

        }

    }
}