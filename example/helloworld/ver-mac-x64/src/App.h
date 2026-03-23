#ifndef HW_APP_H
#define HW_APP_H

#include <QObject>

#include "VM.h"

class App: public QObject {
    Q_OBJECT

    public:
        App();
        virtual ~App();

        VM* vm();

    private:
        VM *_vm;
};

#endif // HW_APP_H
