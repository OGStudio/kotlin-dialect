#ifndef HW_APP_H
#define HW_APP_H

#include <QObject>

#include "main.h"
#include "VM.h"

class App: public QObject {
    Q_OBJECT

    public:
        App();
        virtual ~App();

        MainComponent *main();
        VM* vm();

    private:
        MainComponent *_main;
        VM *_vm;
};

#endif // HW_APP_H
