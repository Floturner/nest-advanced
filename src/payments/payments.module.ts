import { Module } from '@nestjs/common';
import { EventContext } from './context/event-context';
import { NotificationsService } from './notifications.service';
import { PaymentsWebhookController } from './payments-webhook.controller';
import { SubscriptionsService } from './subscriptions.service';

@Module({
  controllers: [PaymentsWebhookController],
  providers: [NotificationsService, SubscriptionsService, EventContext],
})
export class PaymentsModule {}
