import React from 'react';

export const es = {
  locale: 'es',
  messages: {
    common: {
      error: {
        attention: '¡Atención!',
        idInvalid: 'El número de ID ingresado no es válido.',
        couponORCodeInvalid: 'El número de cupón o código promocional no es valido.',
        clientType: 'No se ha seleccionado el tipo de cliente.',
        formStep2: 'Los campos marcados en rojo son obligatorios.',
        reservationNotFound: 'No se ha encontrado ninguna reserva con esos datos.',
        airlineIata: 'Debes seleccionar una compañía aérea.',
        airlineFlight: 'Debes completar el número de vuelo.',
        completeAllFields: 'Todos los campos son requeridos.',
        invalidEmail: 'La direccion de E-mail no es válida.',
      },
      validationMessages: {
        codePromotionalSuccess: 'El código promocional ingresado se aplicó correctamente a su reserva.',
        couponNumberSuccess: 'El número de cupón ingresado se aplicó correctamente a su reserva.',
        reservationCancelled: 'Su reserva ha sido cancelada',
        subscriptionSuccess: 'Te suscribiste correctamente a nuestra base de datos.',
      },
      navbar: {
        button: {
          reserve: 'Reservar',
        },
        links: {
          promotions: 'Promociones',
          searchReservation: 'Buscar reservación',
          travelAgency: 'Agentes de viaje',
          AutoRentaBusiness: 'AutoRenta Business',
          AutoRentaOnTheGo: 'AutoRenta ON THE GO',
        },
      },
      banner: {
        text: '¿Ya conoces nuestra nueva App? Descárgala para iPhone y Android',
      },
      footer: {
        subscribe: 'Suscríbete y recibe todas nuestras ofertas',
        fullName: 'Nombre y apellido',
        email: 'Dirección de E-mail',
        register: 'Regístrate ',
        contactUs: 'Contáctenos',
        sawgrass: '1580 Sawgrass Corporate Parkway',
        suite: 'Suite 130, Sunrise, FL 33323',
        info: 'info@autorenta.com',
        clientAttention: 'Atención al cliente',
        adviser: 'Contacta a un asesor online',
        faq: 'Preguntas frecuentes',
        searchReservation: 'Buscar una reservación',
        affiliates: 'Afiliados',
        access: 'Acceder a tu cuenta',
        registerAccount: 'Registrar una cuenta',
        promotions: 'Promociones vigentes',
        aboutUs: 'Sobre Autorenta',
        politics: 'Políticas de cancelación',
        terms: 'Términos y condiciones',
        privacy: 'Políticas de privacidad',
        copyRight: 'Copyright © 2020 autorenta.com es una marca registrada de GMS. Todos los derechos reservados',
      },
      loader: {
        text: 'Estamos buscando las mejores ofertas de autos para las fechas escogidas.',
        cancel: 'Estamos localizando su reserva.',
      },
      progressBar: {
        startYourSearch: 'Inicia tu búsqueda',
        chooseYourPlan: 'Selecciona tu plan',
        confirmYourSearch: 'Confirma tu reserva',
      },
    },
    home: {
      googleModal: {
        title: 'Encontrar una oficina o ubicación',
        button: 'BUSCAR EN EL ÁREA',
        notFoundTitle: '¡Atención!',
        notFound1: 'No se han encontrado rentadoras en la ubicación seleccionada.',
        notFound2: 'Por favor inténtalo nuevamente modificando los parámetros de la búsqueda.',
        distance: 'Distancia: ',
        officeCode: 'Código de oficina: ',
        extendedOfficeCode: 'Código extendido: ',
      },
      makeYourReservation: {
        doYourReservationIn: 'Haz tu reserva en',
        only3Steps: 'sólo 3 pasos',
        placeToPickUp: '¿Dónde quieres retirar el vehículo?',
        placeToDropOff: '¿Dónde quieres entregar el vehículo?',
        country: 'País de residencia',
        age: 'Edad',
        carType: 'Tipo de vehículo',
        search: 'Buscar',
        dateToPickUp: 'Fecha y hora de retiro',
        dateToDropOff: 'Fecha y hora de entrega',
        findOnMap: 'Encontrar una oficina o ubicación en el mapa',
        years: 'años',
      },
      offers: {
        mainTitle: 'Descubre todas las ofertas y promociones',
        mainTitleMobile: 'Ofertas y promociones',
        button: 'Más información',
      },
    },
    step1: {
      resultMessage: 'No se encontraron autos para la búsqueda especificada',
      activeSearch: {
        title: 'Búsqueda activa',
        age: 'Edad: ',
        years: ' años',
        modify: 'Modificar',
        modifyModal: {
          title: 'Modificar la búsqueda',
        },
      },
      result: {
        showFirst: 'Mostrar vehículos destacados primero',
        orderBy: 'Ordenar por',
        minToMax: 'De menor a mayor precio',
        maxToMin: 'De mayor a menor precio',
        carsResult: {
          orSimilar: 'o similar',
          seats: 'asientos',
          doors: 'puertas',
          bigBags: 'maletas grandes',
          smallBags: 'maletas pequeñas',
          gear: 'Transmisión',
          air: 'Aire acondicionado',
          featured: '¡Destacado!',
          cancel: 'Cancela gratis tu reserva con 48 horas de anticipación.',
          advise: 'Algunas rentadoras cobran un cargo extra a conductores menores de 25 años.',
          additionalInformation: 'Información adicional',
          seeDetails: 'Ver detalle del plan',
          reserveNow: 'Reservar ahora',
        },
        filterList: {
          mainTitle: 'Filtrar resultados',
          companies: 'COMPAÑÍA RENTADORA',
          types: 'TIPOS DE VEHÍCULO',
          seats: 'CANTIDAD DE PASAJEROS',
          bags: 'CAPACIDAD DE MALETAS',
          gears: 'TIPO DE TRANSMISIÓN',
          price: 'RANGO DE PRECIO',
          moreBags: '  ó  más  maletas',
        },
        modalDetailInformation: {
          title: 'Ver detalle de esta tarifa',
          subtitle: 'Código de la tarifa:',
        },
        modalAdditionalInformation: {
          title: 'Información importante',
          secureTitle: 'Seguros y coberturas',
          secureText:
            'Todos los vehículos se ofrecen con una cobertura básica que implica una franquicia / deducible y el\n' +
            'bloqueo de un importe en la tarjeta de crédito del cliente en concepto de depósito o fianza.',
          franTitle: 'Franquicia / Deducible',
          franText:
            'La franquicia o deducible es la cantidad máxima que el cliente deberá abonar en caso de daños al\n' +
            'vehículo. Algunas rentadoras ofrecen Cobertura total para recuperar el importe de la franquicia /\n' +
            'deducible, pero esto no evita el depósito o fianza',
          depoTitle: 'Depósito o bloqueo',
          depoText:
            'El depósito o bloqueo es el bloqueo de un iporte en la tarjeta de crédito del cliente en caso de\n' +
            'daños o cualquier otro reclamo. El bloqueo sólo se puede reducir contratando un seguro adicional en\n' +
            'la compañía rentadora dependiendo del destino.',
          poliTitle: 'Políticas de combustible',
          poliText:
            'Cada compañía tiene su propia política de combustible. La mayoría de las rentadoras entregan el\n' +
            'vehículo con el tanque lleno y el cliente deberá devolverlo de la misma manera. En caso de no\n' +
            'hacerlo se cobrará un cargo adicional de repostaje.',
          kiloTitle: 'Kilometraje / Millaje',
          kiloText:
            'En la mayoría de los casos la tarifa contratada incluirá kilometraje / millaje ilimitado, no\n' +
            'obstante, para algunos vehículos o regiones particulares existe un límite de kilómetros o millas,\n' +
            'superando ese limite el cliente deberá abonar un costo por kilometro / milla.',
          cardTitle: 'Tarjeta de crédito y débito',
          cardText:
            'La mayoría de las compañías rentadoras requieren una tarjeta de crédito a nombre del condutor\n' +
            'principal para efectuar una pre-autorizacion. No se aceptarán tarjetas de débito como método de pago\n' +
            'o depósito / bloqueo.',
        },
      },
    },
    step2: {
      details: {
        optionalEquipment: 'Total de equipamiento opcional',
        baseFee: 'Tarifa base',
        totalFee: 'Total de impuestos y cargos',
        title: 'Detalles de la reserva',
        selectedPlan: 'PLAN SELECCIONADO',
        changePlan: 'Cambiar plan',
        feeCode: 'Código de la tarifa: ',
        additionalEquipment: 'EQUIPAMIENTO ADICIONAL SOLICITADO',
        chargesDetail: 'DETALLES DE CARGOS',
        estimatedTotal: 'TOTAL ESTIMADO',
        text1:
          'Recuerda que deberás presentar una tarjeta de crédito internacional válida y a nombre del titular de la ' +
          'renta al momento de retirar el vehículo por las oficinas de la compañía rentadora.',
        text2:
          'Algunas compañías rentadoras podrían aplicar cargos y restricciones por conductores por debajo de la edad ' +
          'mínima.',
        text3:
          'Los impuestos y cargos mencionados NO están incluidos en la tarifa base, algunos de ellos sólo pueden ser ' +
          'abonados en destino.',
        agree: 'He leido y acepto los términos y condiciones vigentes en el país destino de la renta.',
        confirm: 'Confirmar reserva',
      },
      carSelected: {
        orSimilar: 'o similar',
        seats: 'asientos',
        doors: 'puertas',
        bigBags: 'maletas grandes',
        smallBags: 'maletas pequeñas',
        gear: 'Transmisión',
        air: 'Aire acondicionado',
        featured: '¡Destacado!',
        cancel: 'Cancela gratis tu reserva con 48 horas de anticipación.',
        advise: 'Algunas rentadoras cobran un cargo extra a conductores menores de 25 años.',
        additionalInformation: 'Información adicional',
        seeDetails: 'Ver detalle del plan',
        reserveNow: 'Reservar ahora',
      },
      clientType: {
        title: 'Tipo de cliente',
        passenger: 'Pasajero / Cliente directo',
        agency: 'Agencia de viajes',
        corporation: 'Corporativo / Empresas',
        choose: 'Selecciona una opción',
        validate: 'Validar',
        typeYourId: 'Ingresa tu número de ID',
      },
      passenger: {
        email: 'E-mail',
      },
      agencyOrCorporation: {
        title: 'Información del pasajero',
        subtitle: 'Información personal del titular de la renta',
        name: 'Nombre',
        surname: 'Apellido',
        phone: 'Teléfono (opcional)',
        flyCompany: 'Compañía aérea (opcional)',
        flyNumber: 'Número de vuelo (opcional)',
        additionalInformation: 'Información adicional',
        promotionalCode: 'Código promocional',
        coupon: 'Número de cupón',
      },
      optionalEquipment: {
        title: 'Agrega equipamiento opcional a tu renta',
        titleMobile: 'Agrega equipamiento opcional',
        text:
          'El equipamiento opcional puede ser reservado, sólo quedará requerido a la compañía rentadora y será ' +
          'confirmado y abonado en la oficina al inicio de la renta. Su costo no está incluido en el precio prepago de ' +
          'esta reserva y se mostrará un precio estimado a modo orientativo pudiendo variar sin previo aviso.',
        perDay: '(por día)',
        GPS: 'Navegador satelital',
        babySeat: 'Asiento para bebés',
        childrenSeat: 'Asiento para niños',
        elevatorSeat: 'Asiento elevador para niños',
        elevatorSeatMobile: 'Asiento elevador',
      },
      changePlan: {
        quoteFee: 'Cotizar esta tarifa',
        selectedFee: 'Tarifa seleccionada',
      },
    },
    step3: {
      agencyOrOrganizationPayment: {
        reservationValue: 'Valor total de la renta:',
        discount: 'Descuento AutoRenta (sólo prepago):',
        commission: 'Comisión de la Agencia (sólo prepago):',
        neto: 'Neto a pagar (sólo prepago):',
        titleReservation1: 'Pagar esta reserva con tarjeta de crédito',
        titleReservation2: 'El voucher y la factura se enviarán por E-mail y se cargarán en su perfil de usuario.',
        choose: 'Seleccione el método de pago:',
        next: 'Siguiente',
        bankTitle: 'Para pagar con una transferencia bancaria',
        bankSubtitle: 'Realiza un depósito o transferencia a la siguiente cuenta bancaria.',
        bank: 'Banco: ',
        accountNumber: 'Número de cuenta: ',
        routeNumber: 'Giros Electrónicos: ',
        deposit: 'Depósitos directos: ',
        swift: 'SWIFT: ',
        message: 'Luego, envía el comprobante electrónico por E-mail a:',
      },
      payment: {
        titleReservation: 'Paga esta reserva con tu tarjeta de crédito',
        subtitleReservation1: '¡Paga ahora y obtén un descuento de ',
        subtitleReservation2: ' en la tarifa base de esta reserva!',
        choose: 'Por favor selecciona el método de pago para esta reserva:',
        creditCard: 'Pagar con Tarjeta de Crédito / Débito',
        next: 'Siguiente',
        creditCardPayment: {
          cardNumber: 'Número de la tarjeta',
          country: 'País',
          cvc: 'CVC (código de seguridad)',
          expirationDate: 'MM/AA',
          postalCode: 'Códigal postal',
          payNow: 'Pagar esta reserva ahora',
          back: 'Volver',
        },
        account: 'Ingresa los datos de tu cuenta',
        email: 'Direccion de E-mail',
        password: 'Contraseña',
        login: 'Iniciar sesión',
        back: 'Volver',
        payOk: '¡Pago exitoso!',
        text1: 'Para pagar esta reserva en destino (POD)',
        text2: 'Dirígete a la oficina de la compañía rentadora y menciona el número de esta reserva',
        text3:
          'El conductor titular deberá mostrar una licencia de válida y una tarjeta de crédito internacional a su ' +
          'nombre al momento de retirar el vehículo. Sobre la misma, la compañía rentadora realizará el bloqueo ' +
          'correspondiente a modo de garantía.',
        reservationNumber: 'Presenta en el mostrador el número de reserva:',
      },
      reservationState: {
        cancelReservationModal: {
          title: 'Cancelar una reserva',
          subtitle:
            '¡Atención! Estás a punto de cancelar tu reserva. ¿Deseas continuar? \n' +
            'Una vez cancelada esta acción no podrá deshacerse.',
          lastname: 'Apellido del pasajero',
          reservationNumber: 'Número de reserva Autorenta',
          email: 'Direccion de E-mail',
          agency: 'ID de Agencia de viajes',
          corporation: 'Id Corporativo',
          cancel: 'Cancelar esta reserva',
        },
        titleReservation: '¡Realizaste la reserva correctamente!',
        textReservation:
          'Consulta más abajo las opciones de pago que te ofrecemos para esta reserva o comunicate \n' +
          'telefónicamente al: ',
        titlePayment: '¡Pagaste tu reserva correctamente!',
        textPayment1: 'Cobramos ',
        textPayment2: ' a tu tarjeta finalizada en ',
        textPayment3: '. ¡Obtuviste un descuento de ',
        textPayment4: 'En breve te enviaremos la factura y el voucher correspondiente',
        subtitle: 'Para gestionar tu reserva en Autorenta utiliza el número:',
        emailText: 'Tu reserva será enviada al E-mail:',
        agencyText: 'Número ID de Agencia de Viajes',
        organizationText: 'Número de ID Corporativo',
        cancel: 'Cancelar',
        print: 'Imprimir',
      },
      reservationDetails: {
        title: 'Detalle de la reserva',
        fullName: 'Nombre y apellido',
        email: 'E-mail',
        phone: 'Teléfono',
        estimatedTotal: 'Total estimado de la reserva',
        flyCompany: 'Compañía aérea',
        flyNumber: 'Número de vuelo',
        promotionalCode: 'Código promocional aplicado',
        coupon: 'Número de cupón aplicado',
        pickUpTitle: 'oficina de inicio',
        dropOffTitle: 'oficina de devolución',
        orSimilar: 'o similar',
        seats: 'asientos',
        doors: 'puertas',
        bigBags: 'maletas grandes',
        smallBags: 'maletas pequeñas',
        gear: 'Transmisión',
        air: 'Aire acondicionado',
        selectedPlan: 'Plan seleccionado',
        detailsTitle: 'Detalle de tarifa, cargos e impuestos',
        baseFee: 'Tarifa base',
        estimated: 'Total Estimado',
        additionalEquipmentTitle: 'Equipamiento adicional solicitado',
        conditionsTitle: 'Condiciones generales de la renta',
        conditionText1:
          'Autorenta confirma grupos o categorías y no marcas o modelos de vehículos, los mismos son a modo ' +
          'orientativo y pueden variar sin previo aviso. La imágen es a modo ilustrativo.',
        conditionText2:
          'Recuerda que deberás presentar una tarjeta de crédito internacional válida a nombre del titular de la ' +
          'renta al momento de retirar el vehículo por las oficinas de la compañía rentadora.',
        conditionText3:
          'Algunas rentadoras podrían aplicar cargos y restricciones por conductores por debajo de la edad mínima.',
        conditionText4:
          'El equipamiento opcional no puede ser reservado, sólo quedará requerido. El mismo será confirmado y ' +
          'abonado en la oficina de retiro del vehículo. Su costo no está incluido en el precio de esta renta y se ' +
          'muestra un precio estimado de los mismos a modo orientativo.',
        conditionText5:
          'La mayoría de las compañías rentadoras ofrecen un período de gracia de dos horas desde la hora acordada ' +
          'de devolución y la hora real en la que se recoge el vehículo. Si crees que llegarás tarde, recomendamos ' +
          'te pongas en contacto directamente con la oficina local de la compañía.',
        conditionText6:
          'En cuanto a la devolución del vehículo, las compañías de alquiler suelen ofrecer un período de gracia de ' +
          '29 minutos entre la hora acordada de devolución y la hora real en que se devuelve el vehículo en la ' +
          'oficina local. Una vez pasado este período de tiempo, es posible que la compañía cargue el equivalente a ' +
          'un día adicional de alquiler.',
        conditionText7:
          'Pueden aplicarse restricciones geográficas, incluso en planes de tarifas que incluyan kilometraje / ' +
          'millaje ilimitado. Algunas compañías rentadoras no permiten cruzar algunas fronteras nacionales o ' +
          'internacionales con el vehículo o aplican cargos adicionales a quien lo haga.',
      },
    },
    promotion: {
      home: 'Inicio',
    },
    faq: {
      title: 'Preguntas frecuentes',
      subtitle:
        'Resolvemos tus dudas a las preguntas más frecuentes que tienen nuestros clientes al alquilar un coche.',
    },
    error: {
      message: 'Lo sentimos, algo inesperado ha ocurrido',
      goHome: 'Volver al inicio',
    },
  },
};
