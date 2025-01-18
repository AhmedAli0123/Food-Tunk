export default {
    name: 'deliveryZone',
    type: 'document',
    title: 'Delivery Zone',
    fields: [
      { name: 'zoneId', type: 'number', title: 'Zone ID' },
      { 
        name: 'zoneName', 
        type: 'array', 
        title: 'Zone Name', 
        of: [{ type: 'string' }] 
      },
      { name: 'coverageArea', type: 'string', title: 'Coverage Area' },
    ],
  };
  